import React, { Component } from 'react';
import ScoreDetail from '../components/ScoreDetail';
import { connect } from 'react-redux';
import { fetchTask, filterData } from '../reducers/action';

export class SingleScoreContainer extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit() {
        this.props.fetchTask();
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="id">Appliation id:</label>
                        <input type="text" className="form-control" id="id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">phone number:</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="btn btn-primary" onClick={this.onSubmit}>Submit</div>
                </form>
                {this.props.data.id && <ScoreDetail data={this.props.data} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
    fetchTask,
    filterData,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleScoreContainer)
