import React from 'react';

const Testimonials = props => {

  return (
    <section className="testimonials">
      <h1>Here&apos;s What Our Customers Are Saying</h1>
      <div className="testimonial-group">
        <div className="testimonial-card-1">
          <div className="testimonial-1-photo"></div>
          <div className="testimonial-1-message">
            <h2 className="testimonial-1-name">محمد سميح ابو العلى </h2>
            <p className="testimonial-1-title">هالوك الفول منشية جنزور طنطا ٢ فدان – 25/3/2021 </p>
            <blockquote className="testimonial-1-content">الحمد لله يادكتور المبيد ده كفاءه عاليه الأرض بتاعتنا يوجد بها كميه هالوك كبيره لكن بفضل الله وابتكار حضرتك وصلنا لنتاءج كويسه جدا اشكرك جدا يادكتور </blockquote>
          </div>
        </div>
        <div className="testimonial-card-2">
          <div className="testimonial-2-photo"></div>
          <div className="testimonial-2-message">
          <h3 className="testimonial-2-name">مهندس محمود حسين </h3>
          <p className="testimonial-2-title">دمياط – 1.5 فدان – تاريخ الزراعة 1/11/2020</p>
          <blockquote className="testimonial-2-content">احنا قمنا بالزراعه اول شهر نوفمبر تقريبا وبدون استخدام اية مبيدات قبل الزراعه بناء على توصيات سعادتك والحمد لله استمرت المعاملات العاديه من رش مغذيات وخلافه على حسب الحاجه </blockquote>
        </div>
      </div>
      <div className="testimonial-card-3">
        <div className="testimonial-3-photo"></div>
        <div className="testimonial-3-message">
        <h3 className="testimonial-3-name">شكرى صالح طحاوى </h3>
        <p className="testimonial-3-title">كفر الدوار - بحيرة- 1ف-جيزة 843- تاريخ الزراعة 31/10/ 2020 </p>
        <blockquote className="testimonial-3-content">انا روحت الأرض النهارده ولفيت حول الفول ولاحظت أن ثلاث أرباع الأرض خاليه تماما من الهالوك </blockquote>
      </div>
        </div>
      </div >
    </section >
  )
};

export default Testimonials;