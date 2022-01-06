import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, List, ListItem, /*SimpleGrid,*/ useColorModeValue, Link, Icon } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection , BioYear } from "../components/bio"
//import { GridItem } from "../components/grid-item"
import { IoLogoInstagram } from 'react-icons/io5'

const Page = () => {
  return (
     <Layout>
     <Container>
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.600","whiteAlpha.800")} p={3} mb={6} align="center">
        Hello, I&apos;m a fledgling engineer.
      </Box>
      <Box display={{md:"flex"}}>
        <Box flexGrow={1}>
         <Heading as="h2" variant="page-title">
	   Ryuichi Nariyoshi
         </Heading>
	 <p>
           System Engineer
	 </p>
        </Box>
	<Box
	  flexShrink={0}
	  mt={{base:4,md:0}}
	  ml={{md:6}}
	  align="center"
        >
	 <Image
	  borderColor="whiteAlpha.800" 
	  borderWidth={2}
	  borderStyle="solid"
	  maxWidth="100px"
	  display="inline-block"
	  borderRadius="full"
	  src="/images/profile.jpg"
	  alt="Profile Image"
	 />
	</Box>
      </Box>
      <Section delay={0.1}>
       <Heading as="h3" variant="section-title">
	About
       </Heading>
       <Paragraph>
	I&apos;m a system engineer. Until now my job is mainly analyzing and processing natural language. I have much interest of statistics and want to utilize it for business.{" "}
       </Paragraph>
       <Box align="center" my={4}>
	<NextLink href="/works">
	 <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          My portfolio
	 </Button>
	</NextLink>
       </Box>
      </Section>
      <Section delay={0.2}>
       <Heading as="h3" variant="section-title">
	Bio
       </Heading>
       <BioSection>
	<BioYear>1993</BioYear>
	Born in Fukuoka,Japan.
       </BioSection>
       <BioSection>
	<BioYear>2019</BioYear>
	Graduated from Waseda University in the faculty of Advanced Science and Engineering.
       </BioSection>
       <BioSection>
        <BioYear>2019 to present</BioYear>
        Lazy Worker.
       </BioSection>
      </Section>
      <Section delay={0.4}>
       <Heading as="h3" variant="section-title">
	Favorite
       </Heading>
       <Paragraph>
	Music<br/>
	Tsubakiya Quarttette(椿屋四重奏)<br/>
	m-flo<br/>
	Billie Eilish<br/>
       </Paragraph>
      </Section>
      <Section delay={0.7}>
       <Heading as="h3" variant="section-title">
        About
       </Heading>
       <Paragraph>
        This site is maked by refference to <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA}">this movie</Link>  (Contributed by devaslife). I maked this site for studying skills for creating homepage and introducing about me.<br/>
       </Paragraph>
      </Section>
      <Section delay={0.9}>
       <Heading as="h3" variant="section-title">
        On the web
       </Heading>
       <List href>
	<ListItem>
	 <Link href="https://www.instagram.com/sakkurisan/" target="_blank">
	  <Button
	   variant="ghost"
	   colorScheme="teal"
	   leftIcon={<Icon as={IoLogoInstagram} />}
	  >
	   sakkurisan
	  </Button>
	 </Link>
	</ListItem>
       </List>
      </Section>
    </Container>
    </Layout>
  )
}

export default Page
