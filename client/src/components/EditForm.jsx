import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class EditForm extends Component{
    constructor(){
        super();
        this.state = {
            data: null,
            dataLoaded: false,
            redirect: false,
            title1 : '',
            content1 : '',
            title2 : '',
            content2 : '',
            title3 : '',
            content3 : '',
            bodyTitle1 : '',
            bodyTitle2 : ''
        }
    }
    componentDidMount(){
        axios.get('/home_page').then(res=>{
            console.log(res);
            this.setState({
                data: res.data.homePage,
                dataLoaded: true,
                title1 : res.data.homePage[0].title1,
                content1 : res.data.homePage[0].content1,
                title2 : res.data.homePage[0].title2,
                content2 : res.data.homePage[0].content2,
                title3 : res.data.homePage[0].title3,
                content3 : res.data.homePage[0].content3,
                bodyTitle1 : res.data.homePage[0].bodyTitle1,
                bodyTitle2 : res.data.homePage[0].bodyTitle2
            });
        }).catch(err => console.log(err));
    }
    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    handleHomeUpdate = (e)=>{
        e.preventDefault();
        axios.put('/home_page', {
            'title1': this.state.title1,
            'content1': this.state.content1,
            'title2': this.state.title2,
            'content2': this.state.content2,
            'title3': this.state.title3,
            'content3': this.state.content3,
            'bodyTitle1': this.state.bodyTitle1,
            'bodyTitle2': this.state.bodyTitle2
        }).then(response => {
            this.setState({
                redirect: true
            });
        }).catch(err =>{
            console.log(err);
        })
        
    }
    renderHomeForm = () =>{
        return (
            <div className="register">
                <div className="container">
                    <ol className="breadcrumb main-color-bg">
                        <li>Please edit the Home Page</li>
                    </ol>
                </div>
                <form className="container" onSubmit={this.handleHomeUpdate}>
                    <div className='form-group'>
                        <span className='input-group'>
                            <span className='input-group-addon main-color-bg'>Title1</span>
                            <input 
                            className='form-control' 
                            type="text"
                            name="title1"
                            value={this.state.title1}
                            onChange={this.handleInputChange}
                            required />
                        </span>
                        <span className='input-group'>
                            <span className='input-group-addon main-color-bg'>Content1</span>
                            <input 
                            className='form-control' 
                            type="text"
                            name="content1"
                            value={this.state.content1}
                            onChange={this.handleInputChange}
                            required />
                        </span>
                    </div>
                    <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon main-color-bg'>title2</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="title2"
                        value={this.state.title2}
                        onChange={this.handleInputChange}
                        required />
                    </span>
                    <span className='input-group'>
                        <span className='input-group-addon main-color-bg'>content2</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="content2"
                        value={this.state.content2}
                        onChange={this.handleInputChange}
                        required />
                    </span>
                    </div>
                    <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon main-color-bg'>Title3</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="title3"
                        value={this.state.title3}
                        onChange={this.handleInputChange}
                        required />
                    </span>
                    <span className='input-group'>
                        <span className='input-group-addon main-color-bg'>Content3</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="content3"
                        value={this.state.content3}
                        onChange={this.handleInputChange}
                        required />
                    </span>
                    </div>
                    <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon main-color-bg'>Body Title1</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="bodyTitle1"
                        value={this.state.bodyTitle1}
                        onChange={this.handleInputChange}
                        required />
                    </span>
                    </div>
                    <div className='form-group'>
                    <span className='input-group'>
                        <span className='input-group-addon main-color-bg'>Body Title2</span>
                        <input 
                        className='form-control' 
                        type="text"
                        name="bodyTitle2"
                        value={this.state.bodyTitle2}
                        onChange={this.handleInputChange}
                        required />
                    </span>
                    </div>
                    <input type="submit" value="Submit!" className="main-color-bg btn-lg btn-block" />
                </form>
            </div>
            )
    }
    render(){
        const { redirect } = this.state; 
        if(redirect){
            return <Redirect to='/'/>
        }
        return(
        <div>
            {this.state.dataLoaded ? this.renderHomeForm(): <h1>Loading....</h1> }
        </div>)
    }
}

export default EditForm;