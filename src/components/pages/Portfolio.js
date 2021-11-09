import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import PortInfo from '../info/PortInfo';

import axios from 'axios';
import Loading from '../layouts/Loading';

//함수형 컴퍼넌트 -> 권유 클래스 컴퍼넌트 -> 동기/비동기 -> 콜백함수
//함수형 컴퍼넌트 -> 리액트 훅(useEffect)
//promise / axios
class Portfolio extends React.Component {
    //변수설정
    state = {
        isLoading: true,
        ports : []
    }
    getPorts = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
        // console.log(ports.data.data.ports);
        // this.state({ports: ports, isLoading: false})
        this.setState({ports, isLoading: false});
    }
    //사이트 로딩되면 실행
    componentDidMount(){
        setTimeout(() => {
            // this.setState({isLoading: false});     //부분적으로 변경하기 때문에 setState
            this.getPorts();
        }, 3000);
    }
    //랜더함수
    render(){
        const {isLoading, ports} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) :( 
                    <div>
                        <Header />
                        <Contents>
                            <section id="portCont">
                                <div className="container">
                                    <WrapTitle text={['portfolio','site']} />
                                    <div className="port__cont">
                                        {ports.map((port) => (
                                           <PortInfo 
                                                key ={port.id}
                                                id ={port.id}
                                                title ={port.title}
                                                category ={port.category}
                                                link ={port.link}
                                                image ={port.image}
                                           />
                                        ))}
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}
// function Portfolio (){
//     return (
//         <div>
//             <Header />
//             <Contents>
//                 <section id="portCont">
//                     <div className="container">
//                         <WrapTitle text={['portfolio','site']} />
//                         <div className="port__cont">
                           
//                         </div>
//                     </div>
//                 </section>
//                 <ContInfo />
//             </Contents>
//             <Footer />
//         </div>
//     )
// }
export default Portfolio;