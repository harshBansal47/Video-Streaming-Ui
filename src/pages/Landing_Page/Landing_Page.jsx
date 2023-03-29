import "./Landing_Page.scss";
import mobile from "../../assets/mobile.jpg";
import Register from "../Register/Register";
import Children from "../../assets/children.png";
import AddIcon from '@mui/icons-material/Add';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
const Landing_Page = () => {
  return (
    <>
      <Register />
      {/* // ############################################################################ */}
      <div className="devider"></div>
      <div className="mobile">
        <div className="center">
          <div className="img_wrapper">
            <img src={mobile} alt="" className="mobile_img" />
          </div>
          <div className="right">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
        </div>
      </div>
      <div className="devider"></div>
      {/* // ############################################################################ */}
      <div className="children">
        <div className="left">
          <div className="left_wrapper">
            <h1>Create profiles for children.</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </div>
        </div>
        <div className="right">
          <div className="img_wrapper">
            <img className="children_img" src={Children} alt="" />
          </div>
        </div>
      </div>
      <div className="devider"></div>
      {/* // ############################################################################ */}
      <div className="accordion">
        <h1>Frequently Asked Questions</h1>
        <div className="faqs">
          <Accordion style={{ margin: "10px 0px" ,backgroundColor:"rgb(63, 59, 59)",color:"white"}}>
            <AccordionSummary expandIcon={<AddIcon style={{color:"white"}}/>}>
              <Typography variant="h6" marginLeft={2}>What is NetFlix?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography marginLeft={2}>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </Typography>        
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ margin: "10px 0px" ,backgroundColor:"rgb(63, 59, 59)",color:"white"}}>
            <AccordionSummary expandIcon={<AddIcon style={{color:"white"}}/>}>
              <Typography variant="h6" marginLeft={2}>How much does Netflix cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography marginLeft={2}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ margin: "10px 0px" ,backgroundColor:"rgb(63, 59, 59)",color:"white"}}>
            <AccordionSummary expandIcon={<AddIcon style={{color:"white"}}/>}>
              <Typography variant="h6" marginLeft={2}>Where can I watch?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography marginLeft={2}>
               Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ margin: "10px 0px" ,backgroundColor:"rgb(63, 59, 59)",color:"white"}}>
            <AccordionSummary expandIcon={<AddIcon style={{color:"white"}}/>}>
              <Typography variant="h6" marginLeft={2}>How do I cancel?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography marginLeft={2}>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ margin: "10px 0px" ,backgroundColor:"rgb(63, 59, 59)",color:"white"}}>
            <AccordionSummary expandIcon={<AddIcon style={{color:"white"}}/>}>
              <Typography variant="h6" marginLeft={2}>What can I watch on Netflix?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography marginLeft={2}>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="devider"></div>
        {/* // ############################################################################ */}
      </div>
    </>
  );
};

export default Landing_Page;