import { Block, Main, Title, Content } from "./styled"


const Music =()=>{
    return(
        <div>
            <Main>
                <Title>
                    Music Place
                </Title>
                <Content>
                    <Block>
                        <span>
                            <h1>kavinsky</h1>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/MV_3Dpw-BRY" title="YouTube video player" frameborder="0" ></iframe>
                        </span>
                    </Block>
                    <Block>
                        <span>
                            <h1>m.o.o.n</h1>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/phL6fDiYNJk" title="YouTube video player" frameborder="0" ></iframe>
                        </span>
                    </Block>
                    <Block>
                        <span>
                            <h1>perturbator</h1>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YjHHb2jnTZY" title="YouTube video player" frameborder="0" ></iframe>
                        </span>
                    </Block>
                    <Block>
                        <span>
                            <h1>carpenter brut</h1>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/khchqRIPN4U" title="YouTube video player" frameborder="0" ></iframe>
                        </span>
                    </Block>
                </Content>
            </Main>
        </div>
    )
}
export default Music