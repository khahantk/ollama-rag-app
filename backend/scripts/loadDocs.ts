import { ChromaService } from '../src/chroma/chroma.service';
import { splitText } from '../src/common/text-splitter';
import { Document } from '@langchain/core/documents';
import fetch from 'node-fetch';

async function main() {
  const chroma = new ChromaService();

  // Load some text (example: blog)
  const res = await fetch("https://lilianweng.github.io/posts/2023-06-23-agent/");
  const html = await res.text();

  // Strip tags (basic)
  const text = html.replace(/<[^>]*>?/gm, "");
  const chunks = splitText(text, 1000, 200);

  const docs: Document[] = chunks.map((chunk, i) => ({
    pageContent: chunk,
    metadata: { id: `doc-${i}` },
  }));

  await chroma.addDocuments(docs);
  console.log("✅ Indexed", docs.length, "chunks into ChromaDB");
}

main();
