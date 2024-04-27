import React, { useState } from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'> Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}type='date' required/>   
                        </div>

                        {/*Time selection */}
                        <div>
                        <label htmlFor='book-time'> Choose Time:</label>
                        <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="">Select a Time:
                            </option>
                            {
                            props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        {/*Number of Guests*/}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        {/*For occasion*/}
                        <div>
                        <label htmlFor='book-occasion'>Special Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Graduation</option>
                        </select>
                        </div>

                        {/*For submit button*/}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Book Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
};

export default BookingForm;