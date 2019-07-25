/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";
import { Link, graphql, useStaticQuery } from "gatsby";

/**
 * Shadow me to add your own bio content
 */

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const SubtleLink = ({ children, ...props }) => {
  return (
    <Styled.a
      sx={{
        variant: `textStyles.subtleLink`
      }}
      {...props}
    >
      {children}
    </Styled.a>
  );
};

export default () => {
  const data = useStaticQuery(graphql`
    query socialLinks {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <div>
      <Styled.p
        sx={{
          variant: `textStyles.display`
        }}
      >
        Words by <SubtleLink href="http://example.com/">Jane Doe</SubtleLink>
        .
        <br />
        Change me. This is all quite default. If you'd like.
      </Styled.p>
      <Styled.div>
        <SubtleLink as={Link} to="/about">
          About
        </SubtleLink>
      </Styled.div>
      {data.site.siteMetadata.social.map(place => {
        return (
          <Styled.div key={place.name}>
            <SubtleLink href={place.url}>{capitalize(place.name)}</SubtleLink>
          </Styled.div>
        );
      })}
      <br />
      <Styled.div>
        <SubtleLink href="https://www.gatsbyjs.org">
          <img
            src="https://www.gatsbyjs.org/icons/icon-48x48.png?v=008654519ce705ac7bc44303a9014606"
            sx={{
              height: t => t.fontSizes[2],
              mr: 1,
              verticalAlign: `middle`,
              position: `relative`,
              top: `-2px`
            }}
            alt="Gatsby icon"
          />
          Built with Gatsby
        </SubtleLink>
      </Styled.div>
    </div>
  );
};
