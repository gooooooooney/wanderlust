import { notion } from "@/lib/notion/notion-db";
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export class NotionService {
  static async getDatabase() {
    const database = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
    });
    
    return database;
  }
}
