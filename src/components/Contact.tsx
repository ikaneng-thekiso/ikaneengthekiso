import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ikanengthekiso@gmail.com',
    href: 'mailto:ikanengthekiso@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+27 82 421 4737',
    href: 'tel:+27824214737',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'www.linkedin.com/in/ikaneng-thekiso',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'ikanengthekiso@gmail.com',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 matrix-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-title">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Whether it's about opportunities, collaborations, or just a friendly chat — 
            feel free to reach out. I'm always open to connecting.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg card-hover bg-card group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Gauteng, South Africa</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
