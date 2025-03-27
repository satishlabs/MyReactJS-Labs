import React, { Component } from "react";
import MyTextInput from "../mycomponent/MyTextInput";
import MyTextInput1 from "../mycomponent/MyTextInput1";

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
                    <MyTextInput 
                        mytype="text"
                        myname="bookId"
                        mylabel="Book Id"
                        myplaceholder="Enter Book Id"
                        myvalue={bookId}
                        myonChange={this.myChangeHandler}
                        myerror={this.state.myerrors.mybookId}
                        />

                    <MyTextInput 
                        mytype="password"
                        myname="bookName"
                        mylabel="Book Name"
                        myplaceholder="Enter Book Name"
                        myvalue={bookName}
                        myonChange={this.myChangeHandler}
                        myerror={this.state.myerrors.mybookName}
                        />      

                    <MyTextInput1
                        mytype="text"
                        myname="author"
                        mylabel="Book Author"
                        myplaceholder="Enter Author"
                        myvalue={author}
                        myonChange={this.myChangeHandler}
                        myerror={this.state.myerrors.myauthor}
                        />

                    <MyTextInput1 
                        mytype="text"
                        myname="price"
                        mylabel="Book Price"
                        myplaceholder="Enter Price"
                        myvalue={price}
                        myonChange={this.myChangeHandler}
                        myerror={this.state.myerrors.myprice}
                        />

                    <MyTextInput 
                        mytype="text"
                        myname="pub"
                        mylabel="Publication"
                        myplaceholder="Enter Publication "
                        myvalue={pub}
                        myonChange={this.myChangeHandler}
                        myerror={this.state.myerrors.mypub}
                        />
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
