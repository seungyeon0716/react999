import React from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Contents from '../layouts/Contents';

function Youtube (){
    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div class="container">
                        <div class="wrap__title">
                            <h2><strong>Youtube</strong><em>Reference</em></h2>
                        </div>
                        <div class="youtube__cont">
                            <div class="youtube">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </Contents>

        <Footer />
    </div>
    )
}
export default Youtube;