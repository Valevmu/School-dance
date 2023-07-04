import React from 'react';
import '../Styles/Features.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import feature1 from '../assets/feature1.jpeg';
import feature2 from '../assets/feature2.jpeg';
import feature3 from '../assets/feature3.jpeg';

const featuresItems = [
    {
        title: 'Inscripción para tus alumnos',
        description: 'Solo necesitas los datos de tus alumnos!',
        photo: feature1
    },
    {
        title: 'Fácil de usar',
        description: 'Util herramienta para registar a tus estudiantes en tus clases!',
        photo: feature2
    },
    {
        title: 'Variedad de cursos disponibles',
        description: 'Hip-hop, House, Locking',
        photo: feature3
    }
]

export const Features = () => {
    return (
        <div>
            <section className='section-container'>
                <h1>¿Por qué usar Dance Studio?</h1>
                <div className='features-container'>
                    {featuresItems.map((item, index) => {
                        return (
                            <Card sx={{ maxWidth: 280 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.photo}
                                        alt= {`${item.title} photo`}
                                    />
                                    <CardContent>
                                        <div className='typo-group'>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        </div>
                                    </CardContent>
                            </Card>
                        )
                    })
                    }
                </div>
            </section>
        </div>
    )
}
