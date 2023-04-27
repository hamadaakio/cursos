import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import Content from "./components/Content/Content"
import Button from "./components/Button/Button"
import Layout from "./components/Layout/Layout";
import Input from "./components/Input/Input"
import Text from "./components/Text/Text"
import RoutesApp from "./routes";
import AuthProvider from "./context/auth";

function App() {
  const teste = (event) => {
    event.preventDefault()
    console.log("Testado!!");
  };

  return (
    <AuthProvider>
      <Layout>
        <RoutesApp />
      </Layout>
    </AuthProvider>
   
  );
}

export default App;
