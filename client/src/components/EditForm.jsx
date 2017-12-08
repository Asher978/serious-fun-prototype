import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class EditForm extends Component{
    state = {
        selectedPage : this.props.pages[0],
        fields : null,
        dataLoaded:false
    }
    componentDidMount() {
        this.fetchData(this.state.selectedPage.pageTitle);
    }

    fetchData = (title)=>{
        axios.get(`/page/${title}`).then(res =>{
            let { pageContent } = res.data,
            fields = [];
            for(let heading in pageContent){
                fields.push({
                    'headingName': heading,
                    'value' : pageContent[heading]
                });
            }
            this.setState({
                selectedPage: {
                    pageTitle: title,
                    _id :res.data._id 
                },
                fields,
                dataLoaded: true
            });
        });
    }
    
    handleSelect = (e) => {
        this.setState({
            selectedPage: {
                'pageTitle':e.target.value,
                '_id': e.target.key
            },
            dataLoaded: false
        }, () => {
            let { pageTitle } = this.state.selectedPage;
            this.fetchData(pageTitle);
        });
    }

    handleFormFields = (e) => {
        let { dataset, value } = e.target,
         newfields = this.state.fields;
         e.preventDefault();
        newfields[dataset.index]['value'] = value;
        console.log(newfields);
       this.setState({
           fields: newfields
       });

    }

    submitEdit = (e)=>{
        e.preventDefault();
        let { _id, pageTitle } = this.state.selectedPage,
        newcontent = {};

        this.state.fields.forEach((page)=> {
            newcontent[`${page.headingName}`]=page.value;
        });

        axios.put(`/page/${_id}`,{
            pageTitle,
            'content':newcontent
        }).then(res => {
            console.log(res);
        });
    }
    renderEditForm = () =>{
        let { pages } = this.props,
        { selectedPage, fields } = this.state;
        return (
            <div>
                <select onChange={this.handleSelect}>
                    <option key = {selectedPage._id}>{selectedPage.pageTitle}</option>
                    {pages.map((page)=>{
                        if(page.pageTitle === selectedPage.pageTitle){
                           return null;
                        } else {
                            return <option key={page._id} value={page.pageTitle} >{page.pageTitle}</option>
                        }
                    })}
                </select>
                <div>
                    <form onSubmit={this.submitEdit}> 
                        {fields.map((heading,iterator) =>{
                            return(
                                <div key={iterator}>
                                    {heading.headingName} <br/>
                                    <input type="text" onChange={this.handleFormFields} data-index={iterator} name={heading.headingName} defaultValue={`${heading.value}`} />
                                </div>)
                        })}
                        <button type="submit">update</button>
                    </form>
                </div>
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
            {this.state.dataLoaded ? this.renderEditForm(): <h1>Loading....</h1> }
        </div>)
    }
}

export default EditForm;