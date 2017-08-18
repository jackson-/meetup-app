import Meetup from './model'

export const createMeetup = async (req, res) => {
  const { title, description } = req.body
  const newMeetup = new Meetup({title, description})

  try{
    return res.status(201).json({meetup:await newMeetup.save()})
  } catch (e) {
    return res.status(e.status).json({error:true, message:"Error with meetup"})
  }
}

export const getAllMeetups = async (req, res) => {
  try{
    const meetups = await Meetup.find({})
    console.log("MEETUPS", meetups.length)
    return res.status(200).json({meetups})
  } catch (e) {
    return res.status(e.status).json({error:true, message:"Error with meetup"})
  }
}
