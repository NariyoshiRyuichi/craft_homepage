import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from "../components/section"
import { GridItem } from "../components/grid-item"

import thumbMakingHomepage from "../public/images/contents/homepage.jpg"

const Posts = () => (
  <Layout title="Posts">
   <Container>
    <Heading as="h4" fontSize={20} mb={4}>
     New Posts
    </Heading>
    <Section delay={0.1}>
     <SimpleGrid columns={[1,2,2]} gap={6}>
      <GridItem
	title="making homepage"
	thumbnail={thumbMakingHomepage}
	href="https://experim.hatenadiary.jp/entry/2022/01/07/001707"
      />
     </SimpleGrid>
    </Section>
   </Container>
  </Layout>
)

export default Posts
