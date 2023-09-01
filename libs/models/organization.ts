export interface Organization {
  organizationId: string;
  name: string;
  shortName: string;
  units: Unit[];
}

interface Unit {
  id: string;
  name: string;
  shortName: string;
}
