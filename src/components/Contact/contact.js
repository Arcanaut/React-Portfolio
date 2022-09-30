import { React, useRef } from 'react';
import emailjs from "@emailjs/browser";
import '../Contact/contact.css'
import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    useMediaQuery,
    VStack
  } from "@chakra-ui/react";


// import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";


function Contact(){
  const [isNotSmallerScreen] = useMediaQuery("(min-width-600px)");
    const form =useRef();
    const { hasCopied, onCopy } = useClipboard("brendan.ahearn@gmail.com");
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o9zp49j', 
            'contact_form', 
            form.current, 
            '1spzpYZW8x2zRzRm5')
                .then((result) => {    
                    console.log(result.text);
                    console.log("message sent!")
                    }, 
                        (error) => {
                        console.log(error.text);
                    },
                e.target.reset());        
                };

    return (
      
        <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-center"
                id="contact"
        >

        <Box
            mt={isNotSmallerScreen? "0" : 16}
            >
            
            <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }} alignSelf="center"></VStack>

       

                <VStack
                  spacing={{ base: 4, md: 8, lg: 20 }}
                  direction={{ base: "column", md: "row" }}
                >
                <VStack
                  mt={isNotSmallerScreen? "0" : 16} align="flex-start"
                  direction={{ base: "row", md: "column" }}>

                
  <Box > 
            <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl"
                }} 
              >
                Reach Out
              </Heading>
              <br />

      <form ref={form} onSubmit={sendEmail} className="contactForm" alignSelf="center">
        <ul>
        <label>Name</label>
        <br />
        <input type="text" name="user_name"
        placeholder='Your name' />
        </ul>
        <br />
        
        <ul>
        <label>Email</label>
        <br />
        <input type="email" name="user_email"
         placeholder='Your email'/>
         </ul>
         <br />

         <ul>
        <label>Message</label>
        <br />
        <textarea name="message"
        placeholder='Your message' />
        </ul>
        <input type="submit" value="Send" id="submitButton" />
      </form>
    </Box>
      </VStack>
      </VStack>
      </Box>
      </Box>
      <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow>

<IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdOutlineEmail/>}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700")
                      }}
                      onClick={onCopy}
                      isRound
                    />

                    
 </Tooltip>
      </Flex>
    
    );
};

export default Contact;