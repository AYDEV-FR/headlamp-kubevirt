/**
 * Maps OpenShift iconClass values to Iconify icon identifiers
 */
export function mapIconClass(iconClass: string): string {
  const iconMap: Record<string, string> = {
    'icon-alpine': 'simple-icons:alpinelinux',
    'icon-centos': 'simple-icons:centos',
    'icon-cirros': 'mdi:cloud-circle',
    'icon-debian': 'simple-icons:debian',
    'icon-fedora': 'simple-icons:fedora',
    'icon-linux': 'mdi:linux',
    'icon-opensuse-leap': 'simple-icons:opensuse',
    'icon-opensuse-tumbleweed': 'simple-icons:opensuse',
    'icon-oracle': 'simple-icons:oracle',
    'icon-other': 'mdi:help-circle-outline',
    'icon-rhel': 'simple-icons:redhat',
    'icon-sles': 'simple-icons:suse',
    'icon-ubuntu': 'simple-icons:ubuntu',
    'icon-windows': 'mdi:microsoft-windows',
  };

  return iconMap[iconClass] || 'mdi:help-circle-outline';
}
