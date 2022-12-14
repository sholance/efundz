/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/company": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.company.id"];
          updated_at?: parameters["rowFilter.company.updated_at"];
          name?: parameters["rowFilter.company.name"];
          description?: parameters["rowFilter.company.description"];
          logo_url?: parameters["rowFilter.company.logo_url"];
          website?: parameters["rowFilter.company.website"];
          demo?: parameters["rowFilter.company.demo"];
          address?: parameters["rowFilter.company.address"];
          founder?: parameters["rowFilter.company.founder"];
          stage?: parameters["rowFilter.company.stage"];
          level?: parameters["rowFilter.company.level"];
          email?: parameters["rowFilter.company.email"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["company"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** company */
          company?: definitions["company"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.company.id"];
          updated_at?: parameters["rowFilter.company.updated_at"];
          name?: parameters["rowFilter.company.name"];
          description?: parameters["rowFilter.company.description"];
          logo_url?: parameters["rowFilter.company.logo_url"];
          website?: parameters["rowFilter.company.website"];
          demo?: parameters["rowFilter.company.demo"];
          address?: parameters["rowFilter.company.address"];
          founder?: parameters["rowFilter.company.founder"];
          stage?: parameters["rowFilter.company.stage"];
          level?: parameters["rowFilter.company.level"];
          email?: parameters["rowFilter.company.email"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.company.id"];
          updated_at?: parameters["rowFilter.company.updated_at"];
          name?: parameters["rowFilter.company.name"];
          description?: parameters["rowFilter.company.description"];
          logo_url?: parameters["rowFilter.company.logo_url"];
          website?: parameters["rowFilter.company.website"];
          demo?: parameters["rowFilter.company.demo"];
          address?: parameters["rowFilter.company.address"];
          founder?: parameters["rowFilter.company.founder"];
          stage?: parameters["rowFilter.company.stage"];
          level?: parameters["rowFilter.company.level"];
          email?: parameters["rowFilter.company.email"];
        };
        body: {
          /** company */
          company?: definitions["company"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          bio?: parameters["rowFilter.profiles.bio"];
          achievements?: parameters["rowFilter.profiles.achievements"];
          email?: parameters["rowFilter.profiles.email"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          bio?: parameters["rowFilter.profiles.bio"];
          achievements?: parameters["rowFilter.profiles.achievements"];
          email?: parameters["rowFilter.profiles.email"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          bio?: parameters["rowFilter.profiles.bio"];
          achievements?: parameters["rowFilter.profiles.achievements"];
          email?: parameters["rowFilter.profiles.email"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  company: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: timestamp with time zone */
    updated_at?: string;
    /** Format: text */
    name?: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    logo_url?: string;
    /** Format: text */
    website?: string;
    /** Format: text */
    demo?: string;
    /** Format: text */
    address?: string;
    /**
     * Format: text
     * @description Note:
     * This is a Foreign Key to `profiles.username`.<fk table='profiles' column='username'/>
     */
    founder?: string;
    /** Format: smallint */
    stage?: number;
    /** Format: ARRAY */
    level?: unknown[];
    /** Format: character varying */
    email?: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: timestamp with time zone */
    updated_at?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    website?: string;
    /** Format: text */
    bio?: string;
    /** Format: text */
    achievements?: string;
    /** Format: text */
    email: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description company */
  "body.company": definitions["company"];
  /** Format: uuid */
  "rowFilter.company.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.company.updated_at": string;
  /** Format: text */
  "rowFilter.company.name": string;
  /** Format: text */
  "rowFilter.company.description": string;
  /** Format: text */
  "rowFilter.company.logo_url": string;
  /** Format: text */
  "rowFilter.company.website": string;
  /** Format: text */
  "rowFilter.company.demo": string;
  /** Format: text */
  "rowFilter.company.address": string;
  /** Format: text */
  "rowFilter.company.founder": string;
  /** Format: smallint */
  "rowFilter.company.stage": string;
  /** Format: ARRAY */
  "rowFilter.company.level": string;
  /** Format: character varying */
  "rowFilter.company.email": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: text */
  "rowFilter.profiles.username": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.website": string;
  /** Format: text */
  "rowFilter.profiles.bio": string;
  /** Format: text */
  "rowFilter.profiles.achievements": string;
  /** Format: text */
  "rowFilter.profiles.email": string;
}

export interface operations {}

export interface external {}
