import { KubeObject } from '@kinvolk/headlamp-plugin/lib/K8s/cluster';

class CDI extends KubeObject {
  get spec() {
    return this.jsonData?.spec;
  }

  get status() {
    return this.jsonData?.status;
  }

  getVersion(): string {
    return this.status?.observedVersion || this.status?.operatorVersion || 'Unknown';
  }

  getFeatureGates(): string[] {
    return this.spec?.config?.featureGates || [];
  }

  getPhase(): string {
    return this.status?.phase || 'Unknown';
  }

  static kind = 'CDI';
  static apiVersion = 'cdi.kubevirt.io/v1beta1';
  static isNamespaced = false;
  static apiName = 'cdis';
  static apiPlural = 'cdis';
}

export default CDI;
