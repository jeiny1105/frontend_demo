import { useState } from 'react'
import './App.css'

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  address: '',
  membershipType: 'Student',
  readingInterests: '',
  startDate: '',
  agreeToTerms: false,
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [members, setMembers] = useState([])
  const [editingMemberId, setEditingMemberId] = useState(null)

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

    if (editingMemberId) {
      setMembers((currentMembers) =>
        currentMembers.map((member) =>
          member.id === editingMemberId
            ? {
                ...formData,
                id: editingMemberId,
              }
            : member,
        ),
      )
      setEditingMemberId(null)
    } else {
      setMembers((currentMembers) => [
        ...currentMembers,
        {
          ...formData,
          id: Date.now(),
        },
      ])
    }

    setFormData(initialFormData)
  }

  const handleEdit = (member) => {
    setEditingMemberId(member.id)
    setFormData({
      fullName: member.fullName,
      email: member.email,
      phone: member.phone,
      password: member.password,
      address: member.address,
      membershipType: member.membershipType,
      readingInterests: member.readingInterests,
      startDate: member.startDate,
      agreeToTerms: member.agreeToTerms,
    })
  }

  const handleDelete = (memberId) => {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== memberId),
    )

    if (editingMemberId === memberId) {
      setEditingMemberId(null)
      setFormData(initialFormData)
    }
  }

  const handleCancelEdit = () => {
    setEditingMemberId(null)
    setFormData(initialFormData)
  }

  return (
    <main className="library-page">
      <section className="registration-card">
        <div className="form-intro">
          <p className="eyebrow">Library Subscription</p>
          <h2>Register for your reading membership</h2>
          <p>
            Enter subscriber details and keep each registration listed below.
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
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

          <div className="form-actions">
            <button type="submit">
              {editingMemberId ? 'Update Registration' : 'Submit Registration'}
            </button>

            {editingMemberId && (
              <button
                className="secondary-button"
                type="button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="subscriptions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Subscription Records</p>
            <h2>Registered Subscribers</h2>
          </div>
          <span className="member-count">{members.length} total</span>
        </div>

        {members.length === 0 ? (
          <p className="empty-table">No subscriptions registered yet.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>Membership</th>
                  <th>Interests</th>
                  <th>Start Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.fullName}</td>
                    <td>{member.email}</td>
                    <td>{member.phone}</td>
                    <td>{'•'.repeat(Math.min(member.password.length, 10))}</td>
                    <td>{member.address}</td>
                    <td>{member.membershipType}</td>
                    <td>{member.readingInterests || 'Not specified'}</td>
                    <td>{member.startDate}</td>
                    <td>
                      <div className="table-actions">
                        <button
                          className="action-button update-button"
                          type="button"
                          onClick={() => handleEdit(member)}
                        >
                          Update
                        </button>
                        <button
                          className="action-button delete-button"
                          type="button"
                          onClick={() => handleDelete(member.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
