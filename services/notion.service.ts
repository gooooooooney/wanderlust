import { notion } from "@/lib/notion/notion-db";
import { BlockObjectResponse, DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export class NotionService {
  static async getDatabase() {
    const database = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
    });
    
    return database;
  }
  static async getPage(pageId: string) {
    const page = await notion.pages.retrieve({
      page_id: pageId,
    });
    return page;
  }

  static async getBlocks(blockId: string, start_cursor?: string) {
    const blocks = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: start_cursor,
    });
    let results = blocks.results as BlockObjectResponse[];
    if (blocks.has_more) {
      const moreResults = await this.getBlocks(blockId, blocks.next_cursor!);
      results = [...results, ...moreResults!];
    }
    return results;
  }
}
