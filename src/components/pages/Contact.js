import React from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Contents from '../layouts/Contents';

function Contact (){
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 class="sr-only">연락처 컨텐츠 영역입니다.</h2>
                    <div class="main__cont">
                        <div class="l1">You are</div>
                        <div class="l2">already </div>
                        <div class="l3">doing well.</div>
                    </div>
                </section>
            </Contents>

        <Footer />
    </div>
    )
}
export default Contact;