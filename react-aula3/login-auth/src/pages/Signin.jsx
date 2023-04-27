import { useNavigate } from "react-router-dom";
import Container from "../components/Container/Container";
import Form from "../components/Form/Form";
import Text from "../components/Text/Text";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import { useState } from "react";
import Input from "../components/Input/Input";


export default function Signin() {
    const { signin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignin = (e) => {
        e.preventDefault();

        setTimeout(() => {
            setError('')
        }, 2000);

        if (!email || !password) {
            setError("Preencha todos os campos")
            return
        }

        const res = signin(email, password);

        if (res) {
            setError(res)
            clearForm()
            return
        }

        navigate("/home");

    }

    const clearForm = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <Form width="500px" handleSubmit={handleSignin}>
            <Container direction="column" align="center" justify="between" gap="16px" width="100%">

                <Text element="h2" className="title" color="dark-title" value="Entrar" />

                <Input type="email" value={email} placeholder="Digite seu e-mail ..."
                    width="100%" handleChange={e => setEmail(e.target.value)}
                />

                <Input type="password" value={password} placeholder="Digite sua senha ..."
                    width="100%" handleChange={e => setPassword(e.target.value)}
                />

                <Button style="dark" width="100%"> Entrar </Button>

                <Content>
                    <Text element="span" className="label"
                        color="grayish" value="Ainda não tem cadastro? "
                    />
                    <Text element="a" className="paragraph"
                        color="dark-title" to="/signup" value="Registre-se"
                    />
                </Content>
                {error
                    ? <Text element="span" className="paragraph" color="error" value={error} />
                    : ""
                }
            </Container>
        </Form>
    )
}