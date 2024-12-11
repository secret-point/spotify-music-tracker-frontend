import { Box, Container } from "@mui/material";
import SearchForm from "../components/SearchForm";

const Home = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Container>
      <SearchForm />
    </Container>
  </Box>
);

export default Home;
