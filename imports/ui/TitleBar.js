import React from 'react';
import PropTypes from 'prop-types';



export default class TitleBar extends React.Component{

    renderSubtitle(){
        if(this.props.subTitle){
            return <h5 className="title-bar__subTitle">{this.props.subTitle}</h5>;
        }
    }
    render(){
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1 className="align">{this.props.title}</h1>
                     {this.renderSubtitle()}
                </div>
            </div>
        );
    }
};

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitlle: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
    title: 'Default Title',
    subTitlle:'Anonymous'
}