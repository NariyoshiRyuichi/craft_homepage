import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from "../components/section"
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Works = () => {
  return (
    <Container>
     <Heading as="h3" fontSize={20} mb={4}>
      Works
     </Heading>
     <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section>
      </Section>
     </SimpleGrid>
    </Container>
  )
}

//<WorkGridItem id="inkdrop" title="Aloha Program" thumbnail={thumbInkdrop}>
//</WorkGridItem>

export default Works

