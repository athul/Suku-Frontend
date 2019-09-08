import React from 'react'
const User = ({ udatas }) => {
    return (<div>

        {udatas.map((udata) => (
        <div class="card">
            <div class="card-body">
                <center><h1>{udata.Name}</h1></center>
                <center>
                <h6 class="card-title"><u>About </u>: {udata.About}</h6>
                <h6 class="card-title"><u>College</u>: {udata.College}</h6>
                <h6 class="card-title"><u>Phone</u>: {udata.Phone}</h6>
                <h6 class="card-title"><u>Email</u>: {udata.Email}</h6>
                </center>
                <><img src={udata.image} alt=""/></>
            </div >
            <center><h3>Projects</h3></center>
            <center>
            <img src="" class="card-img-top" alt="" />
            <div class="card-body" width="18rem">
            <h5 class="card-title">{udata.Project1}</h5>
            <p class="card-text">{udata.Project1desc}</p>
            <a href={udata.Projecturl1} class="btn btn-primary">Go somewhere</a>
            </div>
            <span>
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
            <h5 class="card-title">{udata.Project2}</h5>
            <p class="card-text">{udata.Project2desc}</p>
            <a href={udata.Projecturl2} class="btn btn-primary">Go somewhere</a>
            </div>
            </span>
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
            <h5 class="card-title">{udata.Project3}</h5>
            <p class="card-text">{udata.Project3desc}</p>
            <a href={udata.Projecturl3} class="btn btn-primary">Go somewhere</a>
            </div>
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
            <h5 class="card-title">{udata.Project4}</h5>
            <p class="card-text">{udata.Project4desc}</p>
            <a href={udata.Projecturl4} class="btn btn-primary">Go somewhere</a>
            </div>
            </center>
        </div>
        ))}
    </div>)
};
export default User
