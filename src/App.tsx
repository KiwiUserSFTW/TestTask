import Comments from "./components/Comments"
import Form from "./components/Form"
import { List } from "./components/List"
import { ItemContainer, Container, Tittle, CommentsContainer, Footer } from "./styles/form"
function App() {

  return (
    <>
      <Footer>
        Test App
        <div style={{color:"grey", fontSize:"25px"}}>
          discription etc
        </div>
      </Footer>
      <Container>
        <ItemContainer>
          <Tittle> Items </Tittle>
          <Form />
          <List />
        </ItemContainer>
        <CommentsContainer>
          <Comments />
        </CommentsContainer>
      </Container>
    </>
  )
}

export default App
