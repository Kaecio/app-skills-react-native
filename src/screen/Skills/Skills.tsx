import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import starYellow from '../../assets/icons/starYellow.png'
import star from '../../assets/icons/star.png'


interface Skill {
  id: number
  tecnology: string
  stars: number
}

const skills: Skill[] = [
  {
    'id': 1,
    'tecnology': 'React Native',
    'stars': 5
  },
  {
    'id': 2,
    'tecnology': 'React',
    'stars': 5
  },
  {
    'id': 3,
    'tecnology': 'Node.js',
    'stars': 4
  },
  {
    'id': 4,
    'tecnology': 'TypeScript',
    'stars': 4
  },
  {
    'id': 5,
    'tecnology': 'JavaScript',
    'stars': 5
  },
  {
    'id': 6,
    'tecnology': 'HTML',
    'stars': 5
  },
  {
    'id': 7,
    'tecnology': 'CSS',
    'stars': 5
  },
  {
    'id': 8,
    'tecnology': 'Python',
    'stars': 3
  },
  {
    'id': 9,
    'tecnology': 'Java',
    'stars': 3
  },
  {
    'id': 11,
    'tecnology': 'SQL',
    'stars': 4
  },
  {
    'id': 12,
    'tecnology': 'MongoDB',
    'stars': 4
  },
  {
    'id': 13,
    'tecnology': 'PostgreSQL',
    'stars': 4
  },
]

export default function Skills() {

  function getStarts(stars: number) {
    let skillStars = []
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        skillStars.push(<Image key={i} source={starYellow} style={styles.img} />)
      } else {
        skillStars.push(<Image key={i} source={star} style={styles.img} />)
      }
    }
    return skillStars
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Skills</Text>
      <View style={styles.containerList}>
      {skills.map((skill) => (
        <View key={skill.id} style={styles.list}> 
          <View >
          <Text style={styles.text}>{skill.tecnology}:{" "}</Text>
          </View>
          <View>
          <View style={styles.constainerStars}>       
            {getStarts(skill.stars)}
          </View>
          </View>
        </View>
      ))}
      </View>
    </View>
  )
}