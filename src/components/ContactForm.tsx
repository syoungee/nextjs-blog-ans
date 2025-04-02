'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

interface Form {
  from: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: '성공했어~', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <section className="w-full max-w-md mx-auto">
        {banner && <Banner banner={banner} />}
        <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white p-5 rounded-lg shadow-md">
          <label htmlFor="from" className="font-bold">
            이메일 주소
          </label>
          <input type="email" id="from" name="from" required autoFocus value={form.from} onChange={onChange} className="p-2 border rounded-lg"></input>

          <label htmlFor="subject" className="font-bold">
            제목
          </label>
          <input type="text" id="subject" name="subject" required value={form.subject} onChange={onChange} className="p-2 border rounded-lg"></input>

          <label htmlFor="message" className="font-bold">
            메시지
          </label>
          <textarea rows={10} id="message" name="message" required value={form.message} onChange={onChange} className="p-2 border rounded-lg"></textarea>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            제출
          </button>
        </form>
      </section>
    </div>
  );
}
