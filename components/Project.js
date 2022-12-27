import { useColorMode } from '@chakra-ui/color-mode'
import { Badge, Box, Heading, Image } from "@chakra-ui/react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { CopyBlock, dracula } from "react-code-blocks";
import _ from 'lodash';

const Project = ({ title, slug, excerpt, featured, category, description, liveUrl, repoUrl, img }) => {
    const { colorMode } = useColorMode()
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, fileName } = node.data.target.fields.file;
                return (
                    <Image
                        src={url}
                        alt={fileName}
                        style={{ height: "auto", width: "100%", margin: "1em 0", padding: '1em' }}
                    />
                );
            },
            [INLINES.HYPERLINK]: (node) => {
                const { uri } = node.data;
                const { value } = node.content[0];
                return (
                    <a target="_blank" rel="noreferrer noopener" href={uri}>
                        {value}
                    </a>
                );
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
                if (
                    node.content.length === 1 &&
                    _.find(node.content[0].marks, { type: 'code' })
                ) {
                    return (
                        <div style={{ padding: '1em' }}>
                            <CopyBlock
                                text={node.content[0].value}
                                language='python'
                                showLineNumbers='false'
                                wrapLines
                                theme={dracula}
                                style={{ padding: "1em 0" }}
                            />
                        </div>

                    )
                }
                else
                    return <p>{children}</p>;
            },
            [MARKS.CODE]: (node) => {
                return (
                    <div style={{ padding: '1em' }}>
                        <CopyBlock
                            text={node.chi}
                            language='python'
                            showLineNumbers='true'
                            wrapLines
                            theme={dracula}
                        />
                    </div>)
            }
        },
    };
    return (
        <Box bg={colorMode === 'light' ? 'gray.700' : 'gray.900'} border="none" p="4" color="#fff" maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            {featured && (
                <Badge px="3" py="1" mb="2" bg={colorMode === 'light' ? '#928DAB' : 'gray.700'} color={colorMode === 'light' ? '#fff' : 'green.100'}>Featured</Badge>
            )}
            <Image src={img} alt="alt text" />
            <Heading mt="3" fontSize="xl">{title && title}</Heading>
            {documentToReactComponents(description, options)}
        </Box>
    )
}

export default Project