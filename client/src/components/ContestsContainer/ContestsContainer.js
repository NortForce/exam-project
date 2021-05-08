import React from 'react';
import {withRouter} from 'react-router';
import styles from './ContestContainer.module.sass';
import Spinner from '../Spinner/Spinner';


class ContestsContainer extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    };


    scrollHandler = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if (this.props.haveMore) {
                this.props.loadMore(this.props.children.length);
            }
        }
    };

    render() {
        const {isFetching} = this.props;
        if (!isFetching && this.props.children.length === 0) {
            return (<section className={styles.notFound}>
                <h2>There are no currently contests of searched type</h2>
            </section>);
        } else return (
            <section>
                {this.props.children}
                {isFetching && <div className={styles.spinnerContainer}><Spinner/></div>}
            </section>
        )
    }

}


export default ContestsContainer;


