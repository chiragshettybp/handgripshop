
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, ArrowLeft, AlertCircle, Mail } from 'lucide-react';

const ReturnRefund = () => {
  return (
    <div className="max-w-md mx-auto bg-black">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <Package size={32} className="text-gray-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Return & Refund Policy</h1>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-white">
              Our policy lasts 7 days. If 7 days have passed since your Hand Grips Strengthener Kit purchase, we can't offer you a refund.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <div className="flex items-center mb-2">
                <ArrowLeft size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">Refund Eligibility</h2>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                To be eligible for a refund on your Hand Grips Strengthener Kit, you must:
              </p>
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Request a refund within 7 days of purchase</li>
                <li>Provide your order number and email address</li>
                <li>Not have achieved satisfactory results following the usage guidelines</li>
                <li>Return the kit in original packaging with all 5 components</li>
              </ul>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <div className="flex items-center mb-2">
                <AlertCircle size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">Non-Returnable Items</h2>
              </div>
              <p className="text-sm text-gray-300">
                Some items cannot be returned, including:
              </p>
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Hand grip kits that show excessive wear or damage</li>
                <li>Items missing components from the 5-pack set</li>
                <li>Products not in their original carry bag and packaging</li>
                <li>Items marked as final sale or clearance</li>
              </ul>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Return Process</h2>
              <ol className="text-sm text-gray-300 list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-medium">Contact Customer Service</p>
                  <p>Email rememberframe@gmail.com with your order number and reason for return.</p>
                </li>
                <li>
                  <p className="font-medium">Receive Return Authorization</p>
                  <p>FitBeast support will send you return instructions and a return shipping label.</p>
                </li>
                <li>
                  <p className="font-medium">Ship Your Hand Grip Kit</p>
                  <p>Package your complete 5-pack kit securely and ship it back using the provided label.</p>
                </li>
                <li>
                  <p className="font-medium">Refund Processing</p>
                  <p>Once your return is received and inspected, we'll process your refund within 5-7 business days.</p>
                </li>
              </ol>
            </div>
            
            <div className="border-b border-gray-700 pb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">Refunds</h2>
              <p className="text-sm text-gray-300">
                Once your Hand Grips Strengthener Kit return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
              </p>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center mb-2">
                <Mail size={20} className="text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-white">Contact Us</h2>
              </div>
              <p className="text-sm text-gray-300">
                If you have any questions about our return policy for the Hand Grips Strengthener Kit, please contact us at <a href="mailto:rememberframe@gmail.com" className="text-gray-400 hover:underline">rememberframe@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnRefund;
