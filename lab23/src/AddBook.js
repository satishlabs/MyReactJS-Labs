import React, { Component } from "react";
import classNames from 'classnames';

class AddBook extends Component {


        state = {
            bookId: "",
            bookName: "",
            author: "",
            price: "",
            pub: "",
            myerrors:{}

        };

    myclickHandler = (event) => {
        event.preventDefault();
        console.log("myclickHandler", this.state);
    };

    mysubmitHandler = (event) => {
        event.preventDefault();
        console.log("mysubmitHandler", this.state);
        //1. Do the Validations
        if(this.validateBookForm()){
             //2.  Make API Calls
             console.log("Before Reset",this.state);
             //3. Reset the Form
            this.setState({
                bookId: "",
                bookName: "",
                author: "",
                price: "",
                pub: "",
                myerrors:{}
            })
        }
       
       
        // Reset the Form if needed
        
    };

    validateBookForm(){
        console.log("validateBookForm");
        const{bookId,bookName,author,price, pub} = this.state;
        let isValid=true;
        let errors={}; //Store errors here temporarly
        
        // Do validation
        if(bookId===null || bookId.length===0){
            isValid=false;
            errors["mybookId"]="BookId is Required";
        }else if(bookId.length<=4){
            isValid=false;
            errors["mybookId"]="BookId minlength is 5"
        }else if(bookId.length>=8){
            isValid=false;
            errors["mybookId"]="BookId maxlength is 7"
        }

        if(bookName===null || bookName.length===0){
            isValid=false;
            errors["mybookName"]="BookName is Required"
        }else if(bookName.length<=8){
            isValid=false;
            errors["mybookName"]="BookName minlength is 8"
        }else if(bookName.length>=20){
            isValid=false;
            errors["mybookName"]="BookName maxlength is 20"
        }

        if(author===null || author.length===0){
            isValid=false;
            errors["myauthor"]="Author is Required"
        }else if(author.length<=4){
            isValid=false;
            errors["myauthor"]="Author minlength is 5"
        }else if(author.length>=8){
            isValid=false;
            errors["myauthor"]="Author maxlength is 7"
        }
        
        if(price===null || price.length===0){
            isValid=false;
            errors["myprice"]="Price is Required"
        }else if(price.length<=4){
            isValid=false;
            errors["myprice"]="Price minlength is 5"
        }else if(price.length>=8){
            isValid=false;
            errors["myprice"]="Price maxlength is 7";
        }

        if(pub===null || pub.length===0){
            isValid=false;
            errors["mypub"]="Publication is Required"
        }else if(pub.length<=4){
            isValid=false;
            errors["mypub"]="Publication minlength is 5"
        }else if(pub.length>=8){
            isValid=false;
            errors["mypub"]="Publication maxlength is 7";
        }

        this.setState({
            myerrors:errors
        });

        return isValid;
    }

    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const{bookId,bookName,author,price, pub} = this.state;
        return (
            <div className="container col-md-6">
                <h2 className="text-center">AddBook Form</h2>
                <form onSubmit={this.mysubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="bookId">Book Id</label>
                        <input
                            type="text"
                            name="bookId"
                            className={classNames("form-control form-control-lg",
                                {"is-invalid":this.state.myerrors.mybookId,
                                "is-valid":!this.state.myerrors.mybookId})}
                            placeholder="Enter BookId..."
                           // required //Default validation for required field
                            value={bookId}
                            onChange={this.myChangeHandler}
                        />
                        <div className="text-danger">{this.state.myerrors.mybookId}</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bookName">Book Name</label>
                        <input
                            type="text"
                            name="bookName"
                            className={classNames("form-control form-control-lg",
                                {"is-invalid":this.state.myerrors.mybookName,
                                "is-valid":!this.state.myerrors.mybookName})}
                            placeholder="Enter BookName..."
                           // required //Default validation for required field
                            value={bookName}
                            onChange={this.myChangeHandler}
                        />
                        <div className="text-danger">{this.state.myerrors.mybookName}</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            name="author"
                            className={classNames("form-control form-control-lg",
                                {"is-invalid":this.state.myerrors.myauthor,
                                 "is-valid":!this.state.myerrors.myauthor})}
                            placeholder="Enter Author..."
                           // required //Default validation for required field
                            value={author}
                            onChange={this.myChangeHandler}
                        />
                        <div className="text-danger">{this.state.myerrors.myauthor}</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            className={classNames("form-control form-control-lg",
                                {"is-invalid":this.state.myerrors.myprice,
                                "is-valid":!this.state.myerrors.myprice})}
                            placeholder="Enter Price..."
                            // required //Default validation for required field
                            value={price}
                            onChange={this.myChangeHandler}
                        />
                        <div className="text-danger">{this.state.myerrors.myprice}</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pub">Publication</label>
                        <input
                            type="text"
                            name="pub"
                            className={classNames("form-control form-control-lg",
                                {"is-invalid":this.state.myerrors.mypub,
                                "is-valid":!this.state.myerrors.mypub})}
                            placeholder="Enter Publication..."
                            // required //Default validation for required field
                            value={pub}
                            onChange={this.myChangeHandler}
                        />
                        <div className="text-danger">{this.state.myerrors.mypub}</div>
                    </div>

                    <input
                        type="submit"
                        value="Add Book"
                        className="btn btn-primary btn-lg"
                    />
                </form>
            </div>
        );
    }
}

export default AddBook;
