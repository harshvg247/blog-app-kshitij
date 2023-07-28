import { useState } from "react";
const { v4: uuidv4 } = require('uuid');

const Home = () => {

    const displayMessage=(message)=>{
        let notification=document.getElementById("notification-text");
        let box=document.getElementById("notificationBox");
        notification.innerHTML=message;
        box.style.display="flex";
        setTimeout(()=>{
            box.style.display="none";
        },2000)
    }

    const handleShareBtn=()=>{
        if(btnStatus==="Edit"){
            setBtnStatus("Share");
            displayMessage("Blog editted");
        }else{
            blog.content&&displayMessage("Blog shared");
        }
        (blog.content&&setBlogs([blog,...blogs]));
        setBlog({userName:"Harsh",content:""});
    }
    const handleChange=(event)=>{
        blog.content=event.target.value;
        setBlog({userName:"Harsh",content:blog.content,id:uuidv4()});
    }
    const handleDelete=(id,i)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
        console.log(i);
        if(i){
            displayMessage("Entered edit mode");
        }else{
            displayMessage("Blog deleted");
        }
    }
    const handleEdit=(blog)=>{
        if(btnStatus==="Edit"){}else{
            setBlog({userName:"Harsh",content:blog.content,id:uuidv4()});
        setBtnStatus("Edit");
        handleDelete(blog.id,1);
        }
        
    }
    
    const [blogs,setBlogs]=useState([{userName:"Harsh",content:"If your business doesn't have a blog, you might want to reconsider — B2B marketers who use blogs receive 67% more leads than those who do not, and blogs have been rated the 5th most trusted source for accurate online information.",id:1},
    {userName:"Harsh",content:"A blog post is an individual web page on your website that dives into a particular sub-topic of your blog",id:2}]);
    const[blog,setBlog]=useState({userName:"Harsh",content:"",id:''});
    const[btnStatus,setBtnStatus]=useState("Share");

    return (<div className="homeContainer">
        <div className="homeContainerInner">
            <div className="textBoxContainer" >
                <textarea id="textBoxContainer"placeholder="Type your blog here..." rows="4" value={blog.content} onChange={handleChange}/>
                <div className="addBlogBtnContainer">
                    <button onClick={handleShareBtn} id="shareBlog">{btnStatus}</button>
                </div>
            </div>
            <div className="blogContainer">
                
                {blogs.map((blog)=>(<div className="blog" key={blog.id}>
                        <div className="topLine">
                            <div className="userName">{blog.userName}</div>
                            <div className="editDltBtns">
                                <button id="editBtn" className="editBtn" onClick={()=>handleEdit(blog)}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                                <button className="dltBtn" onClick={()=>handleDelete(blog.id)}><i className="fa-solid fa-trash fa-lg"></i></button>
                            </div>
                        </div>
                        <div className="content">{blog.content}</div>
                        <div className="bottomLine">
                            <button className="likeBtn"><i className="fa-solid fa-thumbs-up fa-lg"></i></button>
                            <button className="dislikeBtn"><i className="fa-solid fa-thumbs-down fa-lg"></i></button>
                        </div>
                    </div>
                    )
                    
                )}
            </div>
        </div>
    </div>);
}
 
export default Home;
