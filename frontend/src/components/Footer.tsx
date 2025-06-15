
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">devXsphere</h3>
            <p className="text-gray-400 mb-4 font-body">
              Building the future of open source, one contribution at a time.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Volunteer With Us
            </Button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 font-body">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="/contribute" className="hover:text-white transition-colors">Contribute</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Community</h4>
            <ul className="space-y-2 text-gray-400 font-body">
              <li><a href="https://www.instagram.com/devXsphere/" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="http://github.com/devXsphere/" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://x.com/devXsphere" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/DevXsphere" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Resources</h4>
            <ul className="space-y-2 text-gray-400 font-body">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-body">
            © 2025 devXsphere. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-body">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
