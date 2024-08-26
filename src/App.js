import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Jump from './Components/Jump';
import Note from './Components/MainContent/Note';
import Document from './Components/MainContent/Document';
import LoginForm from './Components/MainContent/LoginForm';
import RequiredDocuments from './Components/MainContent/RequiredDocuments';
import './App.css'; 

// Define the document lists and PDF links for each section
const documentsForSection1 = [
  <ol>
  <li>कन्या शिशु की नवीनतम पासपोर्ट साइज फोटो</li>
  <li>माता / पिता / अभिभावक के हस्ताक्षर</li>
  <li>स्थाई निवास प्रमाण पत्र</li>
  <li>परिवार रजिस्टर की नकल या सभासद/पार्षद द्वारा दिया गया प्रमाण पत्र</li>
  <li>राशन कार्ड की प्रति</li>
  <li>संस्थागत प्रसव का प्रमाण पत्र</li>
  <li>जन्म पंजीकरण का प्रमाण पत्र</li>
  <li>आय प्रमाण पत्र</li>
  <li>माता और पिता / अभिभावक का आधार कार्ड</li>
  <li>नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर या किराया समझौते के कागजात ना उपलब्ध होने की स्तिथि में गृह कर ना देने का ग्राम प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र</li>
  <li>माता और पिता / अभिभावक का पैन कार्ड</li>
  <li>आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र। 
    <a href="/Doc/born_child_aww_certificate.pdf" target="blank" class="btn btn-success btn-sm">(प्रारूप यहाँ से डाउनलोड करें।) <FontAwesomeIcon icon={faDownload} /></a></li>
  <li>मातृशिशु प्रतिरक्षण / एम०सी० पी० (टीकाकरण) कार्ड</li>
  <li>परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति</li>
  <li>सामाजिक आर्थिक और जाति जनगणना (SECC) में परिवार की स्थिति के आंकलन की प्रति (यदि उपलबध है)</li>
  <li>शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य बालिकाओं को पूर्व में कन्या के जन्म पर योजना का लाभ दिये जाने / न दिये जाने विषयक शपथ –पत्र में निम्न बिंदु शामिल होंगे :-</li>
  <ol>
  <li>मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है</li>
  <li>मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी,समस्त सूचनाएं सही –सही दी गयी है</li>
  <li>मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है</li>
  <li>मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष के बैंक स्टेटमेंट सहित दे दिया गया है</li>
  </ol>
  <li>अन्य आवश्यक अभिलेख:-</li>
  <ol>
  <li>परिवार के विगत 03 बार के बिजली के बिलों की प्रति तथा विगत 01 बार के पानी के बिल की प्रति कनेक्शन न होने की स्तिथि में शपथ पत्र में आवश्यक रूप से उल्लेख करे।</li>
  <li>कोई अन्य दस्तावेज़ की प्रतिलिपि</li>
  </ol>
  </ol>
];

const documentsForSection2 = [
  <ol>
  <li>छात्रा की नवीनतम पासपोर्ट साइज फोटो</li>
  <li>छात्रा के हस्ताक्षर</li>
  <li>माता / पिता/अभिभावक के हस्ताक्षर</li>
  <li>हाईस्कूल का प्रमाण-पत्र</li>
  <li>कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र।
  <br/>
                <center><strong>OR/या</strong></center><br/>
                राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
                
  </li>
  <li>छात्रा एवं माता और पिता/अभिभावक का आधार कार्ड</li>
  <li>छात्रा एवं माता और पिता/अभिभावक का पैन कार्ड</li>
  <li>छात्रा का स्थाई निवास प्रमाण पत्र</li>
  <li>नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर या किराया समझौते के कागजात ना उपलब्ध होने की स्तिथि में गृह कर ना देने का ग्राम प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र</li>
  <li>आय प्रमाण पत्र</li>
  <li>परिवार रजिस्टर की नकल या सभासद/पार्षद द्वारा दिया गया प्रमाण पत्र तथा राशन कार्ड की प्रति (बालिका का नाम राशन कार्ड में अंकित होना अनिवार्य है)</li>
  <li>सामाजिक आर्थिक और जाति जनगणना में परिवार की स्थिति के आंकलन की प्रति (यदि उपलबध है)</li>
  <li>परिवार के विगत 03 बार के बिजली के बिलों की प्रति तथा विगत 01 बार के पानी के बिल की प्रति कनेक्शन न होने की स्तिथि में शपथ पत्र में आवश्यक रूप से उल्लेख करे।</li>
  <li>शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य बालिकाओं को पूर्व में 12वीं कक्षा पूरी करने पर योजना का लाभ दिये जाने / न दिये जाने विषयक शपथ –पत्र में निम्न बिंदु आवश्यक रूप से शामिल होंगे :-</li>
  <ol>
  <li>मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है, मेरी यह पुत्री अविवाहित है।</li>
  <li>मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी समस्त सूचनाएं सही –सही दी गयी है</li>
  <li>मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है</li>
  <li>मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष के बैंक स्टेटमेंट सहित दे दिया गया है</li>
  </ol>
  <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
  <li>परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति</li>
  <li>उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति</li>
  <li>प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण पत्र केवल संस्थागत छात्रा के लिए<a href="/Doc/principle_12_certificate.pdf" target="blank" class="btn btn-success btn-sm">(प्रारूप यहाँ से डाउनलोड करें।) <FontAwesomeIcon icon={faDownload} /></a>
  <br/>
                <center><strong>OR/या</strong></center><br/>
                राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
                <br/>
                <center><strong>OR/या</strong></center><br/>
                निजी विद्यालयों की छात्राओं हेतु प्रमाण पत्र RTE के अंतर्गत पंजीकृत  <a href="/Doc/12_aww_certificate_rte.pdf" target="blank" class="btn btn-success btn-sm">(प्रारूप यहाँ से डाउनलोड करें।) <FontAwesomeIcon icon={faDownload} /></a>
  </li>
  <li>आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र।<a href="/Doc/12_aww_certificate.pdf" target="blank" class="btn btn-success btn-sm">(प्रारूप यहाँ से डाउनलोड करें।) <FontAwesomeIcon icon={faDownload} /></a></li>
  </ol>
];

const documentsForSection3 = [
  <>
  <p>उत्तराखण्ड राज्य में स्थापित बालिका निकेतन, नारी निकेतन, अनाथ आश्रम, उत्तराखण्ड राज्य सरकार द्वारा सहायतित अन्य गृहों में पलने वाली</p>
  <ol>
  <li>छात्रा की नवीनतम पासपोर्ट साइज फोटो</li>
  <li>छात्रा के हस्ताक्षर</li>
  <li>हाईस्कूल का प्रमाण-पत्र</li>
  <li>कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र
  <br/>
                <center><strong>OR/या</strong></center><br/>
                राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
                </li>
  <li>छात्रा का आधार कार्ड</li>
  <li>छात्रा का पैन कार्ड</li>
  <li>अविवाहित होने का प्रमाण पत्र (स्वयं द्वारा प्रदत्त)</li>
  <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
  <li>प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण पत्र केवल संस्थागत छात्रा के लिए<a href="/Doc/principle_12_certificate.pdf" target="blank" class="btn btn-success btn-sm">(प्रारूप यहाँ से डाउनलोड करें।) <FontAwesomeIcon icon={faDownload} /></a>
  <br/>
                <center><strong>OR/या</strong></center><br/>
                राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
  </li>
  <li>उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति</li>
  <li>संस्था की अधीक्षिका द्वारा जारी प्रमाण-पत्र</li><a href="/Doc/sanstha_certificate.pdf" target="blank" class="btn btn-success btn-sm">(प्रारूप यहाँ से डाउनलोड करें।) <FontAwesomeIcon icon={faDownload} /></a>
    </ol>
    </> 
];

function App() {
  return (
    <div>
      <div className='card shadow'>
        <Header />
      </div>
      <div>
        <Jump />
        <label style={{ color: 'green', fontWeight: 700, fontSize: '16px' }}>
          <span style={{ color: 'red' }} className="blinking">Important: </span>
          नंदा गौरा योजना अंतर्गत वित्तीय वर्ष 2024-25 हेतु नए आवेदन दिनांक :30-Nov-2024 तक ही भरा जा सकता है। !!!
        </label>
      </div>
      <div className="container-fluid gradient-section-1">
        <div className="row">
          <div className="col-md-4">
            <div className="section-container">
              <Note />
            </div>
          </div>
          <div className="col-md-4">
            <div className="section-container">
              <Document />
            </div>
          </div>
          <div className="col-md-4">
            <div className="section-container">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid gradient-section-2">
      <Carousel>
        <Carousel.Item>
          <RequiredDocuments title="कन्या के जन्म पर" documents={documentsForSection1} />
        </Carousel.Item>

        <Carousel.Item>
          <RequiredDocuments title="बालिका के इंटर उत्तीर्ण करने पर" documents={documentsForSection2} />
        </Carousel.Item>

        <Carousel.Item>
          <RequiredDocuments title="नारी निकेतन, अनाथ आश्रम में पलने वाली बालिका के इंटर उत्तीर्ण करने पर" documents={documentsForSection3} />
        </Carousel.Item>
      </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default App;