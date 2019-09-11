import React from 'react'
import {Box,Card,Text,Button,Link} from 'rebass'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import {GitHub,Instagram,Twitter,Linkedin} from 'react-feather'
const User = ({ udatas }) => {
  let data=Array.from(udatas);
    return (<div>

        {data.map((udata) => (
        <div className="card" >
            <div className="card-body" style={{
              color:`crimson`
            }}>
                <center><img src={"https://avatars1.githubusercontent.com/"+udata.Users.GitHub+"?size=200"} alt=""/><br/>
                <h1>{udata.Name}</h1>
              </center>
                <center>
                <h6 className="card-title"><u>About </u>: {udata.Users.Bio}</h6>
                <h6 className="card-title" style={{color:`SLATEBLUE`}}><u>College</u>: {udata.Users.College}</h6>
                <h6 className="card-title"><u>Date of Birth</u>: {udata.Users.dob}</h6>
                <h6 className="card-title"><u>Phone</u>: {udata.Users.Phone}</h6>
                <h6 className="card-title"><u>Email</u>: {udata.Users.Email}</h6>
                <h6 className="card-title" style={{color:`SLATEBLUE`}}>{udata.Users.Designations}</h6>
                <span>
                <Link px={3} variant='nav' href= {"https://github.com/"+udata.Users.GitHub}><GitHub size='36' color='black'/></Link>
                <Link px={3} variant='nav' href={"https://twitter.com/"+udata.Users.Twitter}><Twitter size='36' color='aqua'/></Link>
                <Link px={3} variant='nav' href={"https://linkedin.com/"+udata.Users.LinkedIn}><Linkedin size='36' color='blue'/></Link>
                <Link px={3} variant='nav' href={"https://instagram.com/"+udata.Users.Instagram}><Instagram size='36' color='magenta'/></Link>
                </span>
                </center>
            </div >
            <div className="container">
            <div className="columns">
              <div className="column">
                <Box width={256} bg='#ffddaa' color='white'>
                <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
                <Text fontSize={12}>{udata.Users.Skill1}</Text></Card>
                </Box>
              </div>
              <div className="column">
              <Box width={256} bg='#ddaa00'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{udata.Users.Skill2}</Text></Card>
               </Box>
              </div>
              <div className="column">
              <Box width={256} bg='#221144'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{udata.Users.Skill3}</Text></Card>
               </Box>
              </div>
              <div className="column">
              <Box width={256} bg='#7744ff' color='white'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{udata.Users.Skill4}</Text></Card>
               </Box>
              </div>
              </div>
            </div>
            <hr/>
            <center><h3>Projects</h3></center>
            <center>
            <div className="row">
            <div className="col-sm-6">
              <Flippy
                flipOnHover={true}
                flipDirection="horizontal">
              <FrontSide>
            <img src="https://cdn.pixabay.com/photo/2019/09/04/09/48/mammal-4451152_960_720.jpg" className="card-img-top" alt="" />
            <h5>{udata.Users.Project1}</h5>
          </FrontSide><BackSide style={{ backgroundColor:'hotpink'}}>
          <div className="card-body" style={{width:`18rem`}}>
            <p className="card-text">{udata.Users.Project1desc}</p>
            <a href={udata.Users.Projecturl1} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div></BackSide>
          </Flippy>
            </div><br/>

            <div className="column">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical">
              <FrontSide >
            <img src="https://cdn.pixabay.com/photo/2019/08/02/09/39/mugunghwa-4379251_960_720.jpg" class="card-img-top" alt="" />
            <h5>{udata.Users.Project2}</h5>
          </FrontSide>
            <BackSide style={{ backgroundColor:'aqua'}}>
            <div className="card-body" style={{width:`18rem`}}>
            <p className="card-text">{udata.Users.Project2desc}</p>
            <a href={udata.Users.Projecturl2} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div>
            </BackSide>
          </Flippy></div>

        <div className="col-md-6">
            <Flippy
              flipOnHover={true}
              flipDirection="vertical">
              <FrontSide>
            <img src="https://meenhacks.github.io/img/logo/MHACKS_transp.png" width="501" height="334" class=""  alt="" />
            <h5>{udata.Users.Project3}</h5>
          </FrontSide>
            <BackSide style={{ backgroundColor:'aqua'}}>
          <div className="card-body" style={{width:`18rem`}}>
            <p className="card-text">{udata.Users.Project3desc}</p>
            <a href={udata.Users.Projecturl3}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
          </div>
        </BackSide>
          </Flippy></div>

        <div class="column">
            <Flippy
              flipOnHover={true}
              flipDirection="horizontal">
            <FrontSide >
            <img src="https://raw.githubusercontent.com/athul/blog/master/content/assets/n1.png" width="501" height="334"  alt="" />
            <h5>{udata.Users.Project4}</h5>
            </FrontSide >
            <BackSide style={{ backgroundColor:'hotpink'}}>
          <div className="card-body" style={{width:`18rem`}}>
            <p className="card-text">{udata.Users.Project4desc}</p>
            <a href={udata.Users.Projecturl4}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div>
            </BackSide>
            </Flippy>
            </div></div>
            </center>
        </div>

        ))}
    </div>)
};
export default User
