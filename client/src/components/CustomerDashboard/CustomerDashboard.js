import React from 'react';
import {connect} from 'react-redux';
import {getContestsForCustomer, clearContestList} from 'actions/actionCreator';
import styles from './CustomerDashboard.module.sass';
import ContestsContainer from 'components/ContestsContainer/ContestsContainer';
import ContestBox from "components/ContestBox/ContestBox";
import TryAgain from 'components/TryAgain/TryAgain';
import CustomerContestFilter from 'components/ContestFilters/CustomerContestFilter';


class CustomerDashboard extends React.Component {


    loadMore = (startFrom) => {
        this.props.getContests({
            limit: 8,
            offset: startFrom,
            contestStatus: this.props.customerFilter
        });
    };


    componentDidMount() {
        this.getContests();
    }

    getContests = () => {
        this.props.getContests({limit: 8, contestStatus: this.props.customerFilter});
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.customerFilter !== prevProps.customerFilter) {
            this.getContests();
        }
    }

    goToExtended = (contest_id) => {
        this.props.history.push('/contest/' + contest_id);
    };


    setContestList = () => {
        const array = [];
        const {contests} = this.props;
        for (let i = 0; i < contests.length; i++) {
            array.push(<ContestBox data={contests[i]} key={contests[i].id}
                                   goToExtended={this.goToExtended}/>)
        }
        return array;
    };

    componentWillUnmount() {
        this.props.clearContestsList();
    }


    tryToGetContest = () => {
        this.props.clearContestsList();
        this.getContests();
    };

    render() {
        const {error, haveMore} = this.props;
        return (
            <div className={styles.mainContainer}>
                <div>
                    <CustomerContestFilter/>
                </div>
                <div className={styles.contestsContainer}>
                    {
                        error ?
                            <TryAgain getData={this.tryToGetContest()}/>
                            :
                            <ContestsContainer isFetching={this.props.isFetching}
                                               loadMore={this.loadMore}
                                               history={this.props.history} haveMore={haveMore}>
                                {this.setContestList()}
                            </ContestsContainer>
                    }
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return state.contestsList;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContests: (data) => dispatch(getContestsForCustomer(data)),
        clearContestsList: () => dispatch(clearContestList()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard);