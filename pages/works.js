import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from "../components/section"

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

export default Works

