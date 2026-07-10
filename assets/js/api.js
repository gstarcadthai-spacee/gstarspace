const GSTAR_API_URL = 'https://script.google.com/macros/s/AKfycbxz82sAAB6v6d20-j9DTzFsJwILCcrfq-oKTDV0IK-LPBguaOC5bEZ7Xcg6-VGee8M/exec';

const GstarAPI = {
  async request(url, options = {}) {
    const response = await fetch(url, {
      redirect: 'follow',
      cache: 'no-store',
      ...options
    });

    if (!response.ok) {
      throw new Error(`API request failed (${response.status})`);
    }

    const result = await response.json();
    if (!result.ok) throw new Error(result.error || 'Unknown API error');
    return result;
  },

  async health() {
    return this.request(`${GSTAR_API_URL}?action=health`);
  },

  async bootstrap() {
    const result = await this.request(`${GSTAR_API_URL}?action=bootstrap`);
    return result.data;
  },

  async list(module) {
    const result = await this.request(
      `${GSTAR_API_URL}?action=list&module=${encodeURIComponent(module)}`
    );
    return result.data || [];
  },

  async get(module, id) {
    const result = await this.request(
      `${GSTAR_API_URL}?action=get&module=${encodeURIComponent(module)}&id=${encodeURIComponent(id)}`
    );
    return result.data;
  },

  async mutate(action, module, data = {}, id = '') {
    return this.request(GSTAR_API_URL, {
      method: 'POST',
      // text/plain avoids a browser CORS preflight with Apps Script Web Apps.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, module, id, data })
    });
  },

  async create(module, data) {
    const result = await this.mutate('create', module, data);
    return result.data;
  },

  async update(module, id, data) {
    const result = await this.mutate('update', module, data, id);
    return result.data;
  },

  async upsert(module, data) {
    const result = await this.mutate('upsert', module, data);
    return result.data;
  },

  async remove(module, id) {
    await this.mutate('delete', module, {}, id);
    return true;
  }
};
