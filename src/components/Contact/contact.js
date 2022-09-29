import { React, useRef } from 'react';
import emailjs from "@emailjs/browser";
import '../Contact/contact.css'
import {
    Box,
    Button,
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
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}></VStack>

        <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl"
                }}
              >
                Reach Out
              </Heading>

                <VStack
                  spacing={{ base: 4, md: 8, lg: 20 }}
                  direction={{ base: "column", md: "row" }}
                >
                <VStack
                  mt={isNotSmallerScreen? "0" : 16} align="flex-start"
                  direction={{ base: "row", md: "column" }}>

                <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow>

<IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700")
                      }}
                      onClick={onCopy}
                      isRound
                    />

                    
 </Tooltip>
 <Box >
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <label>Name</label>
        <input type="text" name="user_name"
        placeholder='Your name' />
        
        <label>Email</label>
        <input type="email" name="user_email"
         placeholder='Your email'/>
        <label>Message</label>
        <textarea name="message"
        placeholder='Your message' />
        
        <input type="submit" value="Send" />
      </form>
     </Box>
      </VStack>
      </VStack>
      </Box>
      </Box>
      </Flex>
    
    );
};

export default Contact;








// export default function ContactForm() {
//   const ContactForm = () => {
//     const form = useRef();
//     const { hasCopied, onCopy } = useClipboard("brendan.ahearn@gmail.com");
//     const sendEmail = (e) => {
//       e.preventDefault();
//       emailjs
//         .sendForm("gmail", "contact_form", form.current, "1spzpYZW8x2zRzRm5")
//         .then(
//           (result) => {
//             console.log(result.text);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//       e.target.reset();
//     };

//     //form ref={form} onSubmit={sendEmail} sends email
//     <form ref={Contact} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>;

//     return (
//       <Flex
//         bg={useColorModeValue("gray.100", "gray.900")}
//         align="center"
//         justify="center"
//         // css={{
//         //   backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
//         //   backgroundAttachment: 'fixed',
//         // }}
//         id="contact"
//       >
//         <Box
//           borderRadius="lg"
//           m={{ base: 5, md: 16, lg: 10 }}
//           p={{ base: 5, lg: 16 }}
//         >
//           <Box>
//             <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
//               <Heading
//                 fontSize={{
//                   base: "4xl",
//                   md: "5xl"
//                 }}
//               >
//                 Reach Outexport default Contact;
//               </Heading>

//               <Stack
//                 spacing={{ base: 4, md: 8, lg: 20 }}
//                 direction={{ base: "column", md: "row" }}
//               >
//                 <Stack
//                   align="center"
//                   justify="space-around"
//                   direction={{ base: "row", md: "column" }}
//                 >
//                   <Tooltip
//                     label={hasCopied ? "Email Copied!" : "Copy Email"}
//                     closeOnClick={false}
//                     hasArrow
//                   >
//                     <IconButton
//                       aria-label="email"
//                       variant="ghost"
//                       size="lg"
//                       fontSize="3xl"
//                       icon={<MdEmail />}
//                       _hover={{
//                         bg: "blue.500",
//                         color: useColorModeValue("white", "gray.700")
//                       }}
//                       onClick={onCopy}
//                       isRound
//                     />
//                   </Tooltip>

//                   <Link href="https://github.com/Arcanaut">
//                     <IconButton
//                       aria-label="github"
//                       variant="ghost"
//                       size="lg"
//                       fontSize="3xl"
//                       icon={<BsGithub />}
//                       _hover={{
//                         bg: "blue.500",
//                         color: useColorModeValue("white", "gray.700")
//                       }}
//                       isRound
//                     />
//                   </Link>

//                   <Link href="https://www.linkedin.com/in/brendan-ahearn-476688a5/">
//                     <IconButton
//                       aria-label="linkedin"
//                       variant="ghost"
//                       size="lg"
//                       icon={<BsLinkedin size="28px" />}
//                       _hover={{
//                         bg: "blue.500",
//                         color: useColorModeValue("white", "gray.700")
//                       }}
//                       isRound
//                     />
//                   </Link>
//                 </Stack>

//                 <Box
//                   bg={useColorModeValue("white", "gray.700")}
//                   borderRadius="lg"
//                   p={8}
//                   color={useColorModeValue("gray.700", "whiteAlpha.900")}
//                   shadow="base"
//                 >
//                   <VStack spacing={5}>
//                     <FormControl isRequired>
//                       <FormLabel>Name</FormLabel>

//                       <InputGroup>
//                         <InputLeftElement children={<BsPerson />} />
//                         <Input
//                           type="text"
//                           name="name"
//                           placeholder="Your Name"
//                         />
//                       </InputGroup>
//                     </FormControl>

//                     <FormControl isRequired>
//                       <FormLabel>Subject</FormLabel>

//                       <InputGroup>
//                         <InputLeftElement children={<MdOutlineEmail />} />
//                         <Input
//                           type="text"
//                           name="subject"
//                           placeholder="Subject"
//                         />
//                       </InputGroup>
//                     </FormControl>

//                     <FormControl isRequired>
//                       <FormLabel>Email</FormLabel>

//                       <InputGroup>
//                         <InputLeftElement children={<MdOutlineEmail />} />
//                         <Input
//                           type="email"
//                           name="email"
//                           placeholder="Your Email"
//                         />
//                       </InputGroup>
//                     </FormControl>

//                     {/* May add subject field for emails   */}

//                     <FormControl isRequired>
//                       <FormLabel>Message</FormLabel>

//                       <Textarea
//                         name="message"
//                         placeholder="Your Message"
//                         rows={6}
//                         resize="none"
//                       />
//                     </FormControl>

//                     <Button
//                       colorScheme="blue"
//                       bg="blue.400"
//                       color="white"
//                       _hover={{
//                         bg: "blue.500"
//                       }}
//                       isFullWidth
//                       onSubmit={sendEmail()}
//                     >
//                       Send Message
//                     </Button>
//                   </VStack>
//                 </Box>
//               </Stack>
//             </VStack>
//           </Box>
//         </Box>
//       </Flex>
//     );
//   };
// }