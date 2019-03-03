import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Header from '../typography/MediumHeader'
import Thumbnail from '../Thumbnail'
import InfoContainer from '../InfoContainer'

import PostDate from '../PostDate'
import PostTime from '../PostTime'
import PostCategory from '../PostCategory'

const Container = styled.li`
  border: none;
  list-style: none;
  box-shadow: 0 3px 6px #afafaf;
  background: #fff;
  border-radius: 8px;
  padding: 16px 32px;

  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }
`

const CardHeader = styled(Header)`
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 48em) {
    margin-bottom: 2rem;
  }
`

const CardDescription = styled.p`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 1.5rem;
`

const ReadMoreBtn = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  text-align: center;
  color: #fff;
  background-color: #ff006e;
  border-radius: 4px;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #cc0058;
  }
`

export default props => (
  <Container>
    <Link to={props.postTo}>
      <Thumbnail
        src={props.src}
        srcSet={props.srcSet}
        sizes={props.sizes}
        alt={props.alt}
      />
    </Link>
    <CardHeader>{props.title}</CardHeader>
    <InfoContainer>
      <PostDate date={props.date} />
      <PostCategory categoryTo={props.categoryTo} category={props.category} />
      <PostTime time={props.time} />
    </InfoContainer>
    <CardDescription>{props.description}</CardDescription>
    <ReadMoreBtn to={props.postTo}>Read more</ReadMoreBtn>
  </Container>
)
