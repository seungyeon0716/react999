import axios from 'axios';
import React from 'react';
import Header from '../layouts/Header';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
// import { Link } from 'react-router-dom';
import Loading from '../layouts/Loading';
import ReferInfo from '../info/ReferInfo';
import ReferInfo2 from '../info/ReferInfo2';
import ReferInfo3 from '../info/ReferInfo3';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';

class Reference extends React.Component {
    state = {
        isLoading: true,
        menu: 0,
        refers: [],
        refers2: [],
        refers3: []
    }

    getRefer = async () => {
        const {
            data: {
                data : {htmlRefer},
            },
        } = await axios.get("https://seungyeon0716.github.io/react999/src/assets/json/refer.json");
        this.setState({refers : htmlRefer, isLoading : false});

        const {
            data: {
                data : {cssRefer},
            },
        } = await axios.get("https://seungyeon0716.github.io/react999/src/assets/json/referCSS.json");
        this.setState({refers2 : cssRefer, isLoading : false});


        const {
            data: {
                data : {jsRefer},
            },
        } = await axios.get("https://seungyeon0716.github.io/react999/src/assets/json/referJs.json");
        this.setState({refers3 : jsRefer, isLoading : false});
        // console.log(jsRefer);
    }

    changeMenu = (menuIndex) =>{
        this.setState({menu : menuIndex});
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000);
    }

    render(){
        const {isLoading, refers,refers2,refers3} = this.state;
        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text = {['Reference', 'book'] } />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3 className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>HTML</h3>
                                            <h3 className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>CSS</h3>
                                            <h3 className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>JAVASCRIPT</h3>
                                            <ul className={`${this.state.menu === 0? 'show': ''}`}>
                                                {refers.map((refer) => (
                                                    <ReferInfo 
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        element={refer.element}
                                                        definition={refer.definition}
                                                        tag={refer.tag}
                                                        use={refer.use}
                                                        version={refer.version}
                                                        view={refer.view}
                                                    />
                                                ))}
                                            </ul>
                                            <ul className={`${this.state.menu === 1? 'show': ''}`}>
                                                {refers2.map((refer) => (
                                                    <ReferInfo2 
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        default1={refer.default1}
                                                        definition={refer.definition}
                                                        apply={refer.apply}
                                                        use={refer.use}
                                                        version={refer.version}
                                                        view={refer.view}
                                                    />
                                                ))}
                                            </ul>
                                            <ul className={`${this.state.menu === 2? 'show': ''}`}>
                                                {refers3.map((refer) => (
                                                    <ReferInfo3 
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        return1={refer.return1}
                                                        parameters={refer.parameters}
                                                        definition={refer.definition}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
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
// function Reference (){
//     return (
//         <div>
//             <Header />
//             <Contents>
//             <section id="referCont">
//                 <div class="container">
//                     <div class="wrap__title">
//                         <h2><strong>REFERENCE</strong><em>BOOK</em></h2>
//                     </div>
//                     <div class="refer__cont">
//                         <div class="table">
//                             <h3>HTML</h3>
//                             <ul>
//                                 <li>
//                                     <Link to="/Referdetail">
//                                         <span className="num">1</span>
//                                         <span className="attr">&lt;a&gt;</span>
//                                         <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                         <span className="Inline">Inline Element</span>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section id="contactInfo">
//                 <div class="contact__info">
//                     <div>
//                         <p>Let's create something new</p>
//                         <h3>LET`S Get IN<br />TOUCH</h3>
//                         <a href="contact.html" class="contact">Contact Me</a>
//                     </div>
//                 </div>
//             </section>
//             </Contents>
//             <Footer />
//         </div>
//     )
// }
export default Reference;