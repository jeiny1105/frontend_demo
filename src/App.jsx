import { useState } from 'react'
import './App.css'

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  membershipType: 'Student',
  readingInterests: '',
  startDate: '',
  agreeToTerms: false,
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [submittedMember, setSubmittedMember] = useState(null)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.agreeToTerms) {
      alert('Please agree to the library subscription terms.')
      return
    }

    setSubmittedMember(formData)
    setFormData(initialFormData)
  }

  return (
    <main className="library-page">
      <section className="registration-card">
        <div className="form-intro">
          <p className="eyebrow">Library Subscription</p>
          <h1>Register for your reading membership</h1>
          <p>
            Fill in your details to create a subscription and get access to
            books, journals, study spaces, and digital resources.
          </p>
        </div>

        <form className="library-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your current address"
              rows="3"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="membershipType">Membership Type</label>
            <select
              id="membershipType"
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
            >
              <option>Student</option>
              <option>Individual</option>
              <option>Family</option>
              <option>Senior Citizen</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="readingInterests">Reading Interests</label>
            <input
              id="readingInterests"
              name="readingInterests"
              type="text"
              value={formData.readingInterests}
              onChange={handleChange}
              placeholder="Fiction, history, science, magazines..."
            />
          </div>

          <div className="form-row">
            <label htmlFor="startDate">Subscription Start Date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <label className="terms">
            <input
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            I agree to follow library rules and return borrowed books on time.
          </label>

          <button type="submit">Submit Registration</button>
        </form>

        {submittedMember && (
          <div className="success-message">
            <h2>Registration Successful</h2>
            <p>
              Welcome, {submittedMember.fullName}! Your{' '}
              {submittedMember.membershipType.toLowerCase()} subscription has
              been created.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
