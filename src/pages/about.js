import React from 'react'
import styled from 'styled-components';

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Navigation from '../components/navigation/Navigation';
import PageHeader from '../components/typography/PageHeader';
import MediumHeader from '../components/typography/MediumHeader';
import StyledLink from '../components/Link';
import Text from '../components/typography/Paragraph';
import List from '../components/typography/List';
import Item from '../components/typography/Item';
import Anchor from '../components/typography/Anchor';


const DescContainer = styled.div`
     max-width: 80rem;
     padding: 0 1.5rem;
     margin: 0 auto 7rem auto;
`;

const Header = styled(PageHeader)`
    padding: 0 1.5rem;
    margin-bottom: 6rem;
`;

const Paragraph = styled(Text)`
    margin-bottom: 2rem;
`;

const ContentHeader = styled(MediumHeader)`
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 2.4rem;
`;

const ContentList = styled(List)`
    margin-left: 3rem;
`;

class About extends React.Component {

    state = {
        showMobileNav: false
    }

    switchMobileNav = (e) => {
        e.preventDefault();

        this.setState({
            showMobileNav: !this.state.showMobileNav
        })
    }


    render() {

        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = this.props.data.site.siteMetadata.description;

        return (
            <Layout location={this.props.location}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'About me page', content: siteDescription }]}
                    title={siteTitle}
                />
                <Navigation aboutActive="true" hamburgerClicked={this.switchMobileNav} showMobileNav={this.state.showMobileNav} />
                <Header margin="9rem 0 3rem 0">Howdy! Welcome to my blog!</Header>
                <DescContainer>
                    <Paragraph>My name is <b>Marcin Kołodziej.</b> I'm a last year student of an IT High School in Poland. I started my front-end journey at the beginning of 2018 and I really got into it.</Paragraph>
                    <Paragraph>I created this blog to share my knowledge and give something back to the community, refresh a couple of concepts and improve my English skills along the way :) Because I started from scratch not that long ago, I'm aware of the beginner's most common pitfalls when it comes to learning front-end stuff. I deeply hope that you'll find value on my blog.</Paragraph>
                    <Paragraph>Outside of programming I'm striving to improve as a poker player and as a simrace car driver in Assetto Corsa :) Also I devote a lot of attention to the topics of self-improvement to become more effective.</Paragraph>
                    <ContentHeader>How did I build this blog?</ContentHeader>
                    <Paragraph>I built this blog using GatsbyJS. It's an awesome, fast and modern static site generator that use React.</Paragraph>
                    <ContentHeader>Main tools that I use</ContentHeader>
                    <ContentList>
                        <Item><b>Text editor:</b> VS Code Insiders</Item>
                        <Item><b>Prototyping tool: </b>Adobe XD</Item>
                        <Item><b>Notes: </b> Evernote</Item>
                    </ContentList>
                    <ContentHeader>Contact me</ContentHeader>
                    <Paragraph>If you want to say hi or you see a typo and want to report it, feel free to do so at: <Anchor href="mailto:kolomar.contact@gmail.com">kolomar.contact@gmail.com</Anchor></Paragraph>
                </DescContainer>
            </Layout>
        )
    }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
