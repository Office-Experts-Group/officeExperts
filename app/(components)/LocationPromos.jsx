import React from "react";

import Promo from "../../components/Promo";

const LocationPromos = ({ location }) => {
  return (
    <>
      <Promo
        h2={`Microsoft Excel Consulting – ${location}`}
        p={`Our expert Microsoft Excel programmers at Excel Experts ${location} are the very best when it comes to custom Excel development, databases, integration, understanding your business needs, support, data manipulation and so much more.`}
        link={"https://excelexperts.com.au"}
        linkText={"Excel Experts"}
        isLocation={true}
      />
      <Promo
        h2={`Microsoft Access Consulting – ${location}`}
        p={`Our cross-industry Access database consultants at Access Experts ${location} each have over 15 years experience and deliver a prompt, quality service with innovative solutions and competitive pricing. We excel in design, development, database work, integration, support, data manipulation and reporting solutions.`}
        link={"https://accessexperts.com.au"}
        linkText={"Access Experts"}
        isLocation={true}
      />
      <Promo
        h2={`Microsoft Word Designers – ${location}`}
        p={`When it comes to Microsoft Word, our Australia-based, cross-industry consultants at Word Experts ${location} deliver a prompt, quality service with competitive pricing. Our Microsoft Word experts specialise in templates, document design, forms, online documents, accessibility, integration, training and support.`}
        link={"https://wordexperts.com.au"}
        linkText={"Word Experts"}
        isLocation={true}
      />
      <Promo
        h2={`Microsoft Office 365 Consulting – ${location}`}
        p={`When it comes to Microsoft Office 365, our innovative and versatile consultants at Office 365 Experts ${location} deliver a prompt, quality service with competitive pricing. Our 365 experts specialise in getting businesses just like yours efficiently running online through expert design, development, integration, support and training, migration, automation and cloud solutions.`}
        link={"/services/microsoft-office-365"}
        linkText={"Office 365 Experts"}
        isLocation={true}
      />
      <div>
        <Promo
          h2={`Microsoft PowerPoint Designers – ${location}`}
          p={`Our Microsoft PowerPoint experts specialise in presentation templates, design, customisation, automation, integration, training and support. When it comes to Microsoft PowerPoint, our Australia-based, cross-industry consultants at PowerPoint Experts ${location} deliver a prompt, quality service with competitive pricing.`}
          link={"/services/microsoft-powerpoint"}
          linkText={"PowerPoint Designers"}
          isLocation={true}
        />
      </div>
    </>
  );
};

export default LocationPromos;
