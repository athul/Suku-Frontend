import React from 'react'
import {Box,Card,Text,Button,Link} from 'rebass'
import {GitHub,Instagram,Twitter,Linkedin} from 'react-feather'
const User = ({ udatas }) => {
    return (<div>

        {udatas.map((udata) => (
        <div class="card" >
            <div class="card-body" style={{
              color:`rebeccapurple`
            }}>
                <center><h1>{udata.Name}</h1></center>
                <center>
                <h6 class="card-title"><u>About </u>: {udata.About}</h6>
                <h6 class="card-title"><u>College</u>: {udata.College}</h6>
                <h6 class="card-title"><u>Phone</u>: {udata.Phone}</h6>
                <h6 class="card-title"><u>Email</u>: {udata.Email}</h6>
                <span>
                <Link px={3} variant='nav' href={udata.GitHub}><GitHub size='36' color='black'/></Link>
                <Link px={3} variant='nav' href={udata.Twitter}><Twitter size='36' color='aqua'/></Link>
                <Link px={3} variant='nav' href={udata.LinkedIn}><Linkedin size='36' color='blue'/></Link>
                <Link px={3} variant='nav' href={udata.Instagram}><Instagram size='36' color='magenta'/></Link>
                </span>
                </center>
                <><img src={udata.image} alt=""/></>
            </div >
            <div class="container">
            <div class="row">
              <div class="col-md-3">
                <Box width={256} bg='blue' color='white'>
                <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
                <Text fontSize={12}>{udata.Skill1}</Text></Card>
                </Box>
              </div>
              <div class="col-md-3">
              <Box width={256} bg='yellow'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{udata.Skill2}</Text></Card>
               </Box>
              </div>
              <div class="col-md-3">
              <Box width={256} px={2} bg='aqua'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{udata.Skill3}</Text></Card>
               </Box>
              </div>
              <div class="col-md-3">
              <Box width={256} bg='green' color='white'>
              <Card sx={{p: 2,borderRadius: 7,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{udata.Skill4}</Text></Card>
               </Box>
              </div>
              </div>
            </div>
            <hr/>
            <center><h3>Projects</h3></center>
            <center>
            <div class="row">
            <div class="col-sm-6">
            <img src="https://cdn.pixabay.com/photo/2019/09/04/09/48/mammal-4451152_960_720.jpg" class="card-img-top" alt="" />
            <div class="card-body" style={{width:`18rem`}}>
            <h5 class="card-title">{udata.Project1}</h5>
            <p class="card-text">{udata.Project1desc}</p>
            <a href={udata.Projecturl1} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div>
            </div>
            <div class="col-sm-6">
            <img src="https://cdn.pixabay.com/photo/2019/08/02/09/39/mugunghwa-4379251_960_720.jpg" class="card-img-top" alt="" />
            <div class="card-body" style={{width:`18rem`}}>
            <h5 class="card-title">{udata.Project2}</h5>
            <p class="card-text">{udata.Project2desc}</p>
            <a href={udata.Projecturl2} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div></div>
            <div class="col-sm-6">
            <img src="https://meenhacks.github.io/img/logo/MHACKS_transp.png" width="501" height="334" class="card-img-top"  alt="" />
            <div class="card-body" style={{width:`18rem`}}>
            <h5 class="card-title">{udata.Project3}</h5>
            <p class="card-text">{udata.Project3desc}</p>
            <a href={udata.Projecturl3}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div></div>
            <div class="col-sm-6">
            <img src="https://raw.githubusercontent.com/athul/blog/master/content/assets/n1.png" width="501" height="334" class="card-img-top" alt="" />
            <div class="card-body" style={{width:`18rem`}}>
            <h5 class="card-title">{udata.Project4}</h5>
            <p class="card-text">{udata.Project4desc}</p>
            <a href={udata.Projecturl4}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div></div></div>
            </center>
        </div>

        ))}
    </div>)
};
export default User
